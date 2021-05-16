import { Notice, Plugin, MarkdownView } from 'obsidian';
import MeldCalcSettingsTab from './MeldCalcSettingsTab';

interface MeldClacPluginSettings {
	// confirmPassword: boolean;
	// rememberPassword: boolean;
	// rememberPasswordTimeout: number;
}

const DEFAULT_SETTINGS: MeldClacPluginSettings = {
	// confirmPassword: true,
	// rememberPassword: true,
	// rememberPasswordTimeout: 30
}

export default class MeldCalcPlugin extends Plugin {

	settings: MeldClacPluginSettings;

	async onload() {

		await this.loadSettings();

		//this.addSettingTab(new MeldCalcSettingsTab(this.app, this));

		// this.addCommand({
		// 	id: 'encrypt-decrypt',
		// 	name: 'Encrypt/Decrypt',
		// 	checkCallback: (checking) => this.processEncryptDecryptCommand(checking, false)
		// });

		// this.addCommand({
		// 	id: 'encrypt-decrypt-in-place',
		// 	name: 'Encrypt/Decrypt In-place',
		// 	checkCallback: (checking) => this.processEncryptDecryptCommand(checking, true)
		// });
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}


}
