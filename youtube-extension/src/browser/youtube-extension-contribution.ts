import { injectable} from "inversify";
import { Command,  CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { EDITOR_CONTEXT_MENU } from '@theia/editor/lib/browser';
import { AbstractViewContribution } from '@theia/core/lib/browser';

import { YoutubeExtensionWidget } from './youtube-extension-widget';


export const YoutubeExtensionCommand: Command = {
    id: 'youtube-widget-extension:command', 
    label: "Watch Youtube video"
};

@injectable()
export class YoutubeExtensionWidgetContribution extends AbstractViewContribution<YoutubeExtensionWidget> {

    constructor() {
        super({
            widgetId: YoutubeExtensionWidget.ID,
            widgetName: YoutubeExtensionWidget.LABEL,
            defaultWidgetOptions: { area: 'right' },
            toggleCommandId: YoutubeExtensionCommand.id
        });
    }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(YoutubeExtensionCommand, {
            execute: () => super.openView({ activate: false, reveal: true }) 
        });
    }
}

@injectable()
export class YoutubeExtensionMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(EDITOR_CONTEXT_MENU, {
            commandId: YoutubeExtensionCommand.id,
            label: YoutubeExtensionCommand.label
        });
    }
}
