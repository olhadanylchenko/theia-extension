import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
// import { DialogOverlayService } from "@theia/core/src/browser";
import { EDITOR_CONTEXT_MENU } from '@theia/editor/lib/browser';

export const YoutubeExtensionCommand = {
    id: 'YoutubeExtension.command',
    label: "Watch Youtube video"
};

@injectable()
export class YoutubeExtensionCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        // @inject(DialogOverlayService) private readonly dialogOverlayService: DialogOverlayService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(YoutubeExtensionCommand, {
            // execute: () => this.dialogOverlayService.initialize()
            execute: () => this.messageService.info('WOOHOOO');
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
