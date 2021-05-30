import { Notice, Plugin, MarkdownView } from 'obsidian';
import * as mathjs from 'mathjs';
//import MeldCalcSettingsTab from './MeldCalcSettingsTab';
 

// interface MeldClacPluginSettings {
// }

// const DEFAULT_SETTINGS: MeldClacPluginSettings = {
// }

export default class MeldCalcPlugin extends Plugin {

	static evalScope = {};

	//settings: MeldClacPluginSettings;

	async onload() {

		//await this.loadSettings();

		//this.addSettingTab(new MeldCalcSettingsTab(this.app, this));

		this.addCommand({
			id: 'encrypt-calc',
			name: 'Evaluate',
			checkCallback: (checking) => this.processEvaluateCommand(checking)
		});

	}

	processEvaluateCommand(checking: boolean): boolean {
		const mdview = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (!mdview) {
			return false;
		}

		const editor = mdview.sourceMode.cmEditor;
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

		let appendResult = false;
		if ( evalText.endsWith('=') ){
			appendResult = true;
			evalText = evalText.slice(0,-1); // remove '='
		}

		try{
			const rawResult = mathjs.evaluate( evalText, MeldCalcPlugin.evalScope );
			//console.log( evalText, mathjs.typeOf(rawResult), rawResult );

			let finalResult = `${rawResult}`;
			if ( mathjs.typeOf(rawResult) == 'ResultSet' ){
				finalResult = `${rawResult.entries.last()}`;
			}

			if ( appendResult ){
				editor.replaceSelection( `${selection}${finalResult}` );
			}else{
				navigator.clipboard.writeText(finalResult).then(()=>{
					new Notice(finalResult);
				});
			}
		}catch ( ex ){
			new Notice(ex, 5);
		}


		return true;
	}

	// async loadSettings() {
	// 	this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	// }

	// async saveSettings() {
	// 	await this.saveData(this.settings);
	// }


}
