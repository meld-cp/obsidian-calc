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
		
	// 	containerEl.createEl('h2', {text: 'Settings for Meld Encrypt'});

	// 	new Setting(containerEl)
	// 	.setName('Confirm password?')
	// 	.setDesc('Confirm password when encrypting.')
	// 	.addToggle( toggle =>{
	// 		toggle
	// 			.setValue(this.plugin.settings.confirmPassword)
	// 			.onChange( async value =>{
	// 				this.plugin.settings.confirmPassword = value;
	// 				await this.plugin.saveSettings();
	// 				this.updateSettingsUi();
	// 			})
	// 	})
	// ;

	// 	new Setting(containerEl)
	// 		.setName('Remember password?')
	// 		.setDesc('Remember the last used password for this session.')
	// 		.addToggle( toggle =>{
	// 			toggle
	// 				.setValue(this.plugin.settings.rememberPassword)
	// 				.onChange( async value =>{
	// 					this.plugin.settings.rememberPassword = value;
	// 					await this.plugin.saveSettings();
	// 					this.updateSettingsUi();
	// 				})
	// 		})
	// 	;

	// 	this.pwTimeoutSetting = new Setting(containerEl)
	// 		.setName( this.buildPasswordTimeoutSettingName() )
	// 		.setDesc('The number of minutes to remember the last used password.')
	// 		.addSlider( slider => {
	// 			slider
	// 				.setLimits(0, 120, 5)
	// 				.setValue(this.plugin.settings.rememberPasswordTimeout)
	// 				.onChange( async value => {
	// 					this.plugin.settings.rememberPasswordTimeout = value;
	// 					await this.plugin.saveSettings();
	// 					this.updateSettingsUi();
	// 				})
	// 			;
				
	// 		})
	// 	;

	// 	this.updateSettingsUi();
	}

	updateSettingsUi():void{
		// this.pwTimeoutSetting.setName(this.buildPasswordTimeoutSettingName());

		// if ( this.plugin.settings.rememberPassword ){
		// 	this.pwTimeoutSetting.settingEl.show();
		// }else{
		// 	this.pwTimeoutSetting.settingEl.hide();
		// }
	}
	
}