import { App, PluginSettingTab, Setting, SliderComponent } from "obsidian";
import MeldCalcPlugin from "./main";

export default class MeldCalcSettingsTab extends PluginSettingTab {
	plugin: MeldCalcPlugin;

	pwTimeoutSetting:Setting;

	constructor(app: App, plugin: MeldCalcPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
	// 	let { containerEl } = this;

	// 	containerEl.empty();
		
	// 	containerEl.createEl('h2', {text: 'Settings for Meld Calc'});


	// 	this.updateSettingsUi();
	}

	updateSettingsUi():void{
		
	}
	
}