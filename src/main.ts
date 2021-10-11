import { Notice, Plugin, MarkdownView, Editor } from 'obsidian';
//import * as mathjs from 'mathjs';
import { Fcal, FcalError } from 'fcal';
//import MeldCalcSettingsTab from './MeldCalcSettingsTab';
 

// interface MeldClacPluginSettings {
// }

// const DEFAULT_SETTINGS: MeldClacPluginSettings = {
// }

export default class MeldCalcPlugin extends Plugin {

	static evalScope = {};
	static fcal = new Fcal();

	//settings: MeldClacPluginSettings;

	async onload() {

		//await this.loadSettings();

		//this.addSettingTab(new MeldCalcSettingsTab(this.app, this));

		this.addCommand({
			id: 'encrypt-calc',
			name: 'Evaluate',
			checkCallback: (checking) => this.processEvaluateCommand_fcal(checking)
		});

	}

	processEvaluateCommand_fcal(checking: boolean): boolean {
		const mdview = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (!mdview) {
			return false;
		}

		const editor = mdview.editor;
		if (!editor) {
			return false;
		}

		const selection = editor.getSelection();

		let evalText = selection.trim();
		
		if ( evalText.length == 0 ) {
			return false;
		}

		if ( checking ){
			return true;
		}

		// split in to array of lines
		const lines = evalText.split('\n');
		console.log( { lines } );

		let evaluatedLines = [];
		for (const line of lines) {
			evaluatedLines.push( this.evaluateLine( line ) );
		}

		const formatedResult = evaluatedLines.join('\n');

		editor.replaceSelection( formatedResult );

		return true;
	}

	evaluateLine( line: string ): string {
		console.log( line );
		let appendResult = false;
		let evalLine = line;
		if ( line.endsWith('=') ){
			appendResult = true;
			evalLine = line.slice(0,-1); // remove '='
		}

		try{
			console.log( evalLine );
			const rawResult = MeldCalcPlugin.fcal.evaluate( evalLine );
			
			const formatedResult = rawResult.toString();
			console.log( evalLine, rawResult, formatedResult );

			if ( appendResult ){
				return `${line}${formatedResult}`;
			// 	editor.replaceSelection( `${selection}${formatedResult}` );
			}else{
			// 	navigator.clipboard.writeText(formatedResult).then(()=>{
			// 		new Notice(`${formatedResult} (copied)`, 5000);
			// 	});
				return line;
			}
		}catch ( ex ){
			if (ex instanceof FcalError) {
				console.error(ex.message);
				new Notice(ex.message, 5000);
			}else{
				console.error( ex );
				new Notice(ex, 5000);
			}
			return line;
		}
	}

	// processEvaluateCommand_mathjs(checking: boolean): boolean {
	// 	const mdview = this.app.workspace.getActiveViewOfType(MarkdownView);
	// 	if (!mdview) {
	// 		return false;
	// 	}

	// 	const editor = mdview.sourceMode.cmEditor;
	// 	if (!editor) {
	// 		return false;
	// 	}

	// 	const selection = editor.getSelection();

	// 	let evalText = selection.trim();
		
	// 	if ( evalText.length == 0 ) {
	// 		return false;
	// 	}

	// 	if ( checking ){
	// 		return true;
	// 	}

	// 	let appendResult = false;
	// 	if ( evalText.endsWith('=') ){
	// 		appendResult = true;
	// 		evalText = evalText.slice(0,-1); // remove '='
	// 	}

	// 	try{
	// 		const rawResult = mathjs.evaluate( evalText, MeldCalcPlugin.evalScope );
	// 		//console.log( evalText, mathjs.typeOf(rawResult), rawResult );

	// 		let finalResult = `${rawResult}`;
	// 		if ( mathjs.typeOf(rawResult) == 'ResultSet' ){
	// 			finalResult = `${rawResult.entries.last()}`;
	// 		}

	// 		if ( appendResult ){
	// 			editor.replaceSelection( `${selection}${finalResult}` );
	// 		}else{
	// 			navigator.clipboard.writeText(finalResult).then(()=>{
	// 				new Notice(finalResult);
	// 			});
	// 		}
	// 	}catch ( ex ){
	// 		new Notice(ex, 5);
	// 	}


	// 	return true;
	// }

	// async loadSettings() {
	// 	this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	// }

	// async saveSettings() {
	// 	await this.saveData(this.settings);
	// }


}
