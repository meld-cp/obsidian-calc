import { Editor, Notice, Plugin, MarkdownView } from 'obsidian';
import { Fcal, FcalError } from 'fcal';

export default class MeldCalcPlugin extends Plugin {

	private fcal = new Fcal();

	async onload() {

		this.addCommand({
			id: 'encrypt-calc',
			name: 'Evaluate',
			editorCheckCallback: (checking, editor, view) => this.processEvaluateCommand_fcal(checking, editor, view)
		});

	}

	processEvaluateCommand_fcal(checking: boolean, editor: Editor, view: MarkdownView): boolean {

		const selection = editor.getSelection();

		let evalText = selection;

		if (evalText.length === 0) {
			return false;
		}

		if (checking) {
			return true;
		}

		// split in to array of lines
		const lines = evalText.split('\n');

		let evaluatedLines = [];
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			const lastLine = (i === lines.length - 1);
			evaluatedLines.push(this.evaluateLine(line, lastLine));
		}

		const formatedResult = evaluatedLines.join('\n');

		editor.replaceSelection(formatedResult);

		return true;
	}

	evaluateLine(line: string, isLastLine: boolean): string {

		let appendResult = false;
		let evalLine = line.trim();
		if (evalLine.endsWith('=')) {
			appendResult = true;
			evalLine = evalLine.slice(0, -1); // remove '='
		}

		// replace escaped multiplication
		evalLine = evalLine.replace('\\*', '*');

		// trim it down
		evalLine = evalLine.trim();

		try {
			const rawResult = this.fcal.evaluate(evalLine);

			const formatedResult = rawResult.toString();

			if (appendResult) {
				return `${line}${formatedResult}`;
			} else {
				if (isLastLine) {
					navigator.clipboard.writeText(formatedResult).then(() => {
						new Notice(`${formatedResult} (copied)`, 5000);
					});
				}
				return line;
			}
		} catch (ex) {
			if (ex instanceof FcalError) {
				console.error(ex.message);
				new Notice(ex.message, 5000);
			} else {
				console.error(ex);
				new Notice(ex, 5000);
			}
			return line;
		}
	}

}
