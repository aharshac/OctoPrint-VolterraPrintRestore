$(function() {
    function VolterraPrintRestoreViewModel(parameters) {
        var self = this;

        self.VM_settings = parameters[0];

        // self.saveConfig = function() {
        //     var data = {
        //         plugins: {
        //             VolterraPrintRestore: {

        //             }
        //         }
        //     };
        //     self.VM_settings.saveData(data);
        // };

        self.onDataUpdaterPluginMessage = function(plugin, data) {
            if (plugin !== "VolterraPrintRestore") {
                return;
            }
            console.log(data);
        };

        self.onStartup = function() {

        };

        self.onBeforeBinding = function() {
            console.log('Binding VolterraPrintRestoreViewModel')

            self.Config = self.VM_settings.settings.plugins.VolterraPrintRestore;

            console.log(self.Config);
        };
    }

    OCTOPRINT_VIEWMODELS.push([
        VolterraPrintRestoreViewModel,
        ["settingsViewModel"],
        ["#settings_volterra_print_restore"]
    ]);
});
