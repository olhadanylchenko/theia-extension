/**
 * Generated using theia-extension-generator
 */
import { YoutubeExtensionCommandContribution, YoutubeExtensionMenuContribution } from './youtube-extension-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(YoutubeExtensionCommandContribution);
    bind(MenuContribution).to(YoutubeExtensionMenuContribution);
});
