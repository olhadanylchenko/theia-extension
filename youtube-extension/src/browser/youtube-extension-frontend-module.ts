/**
 * Generated using theia-extension-generator
 */
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';
import { MenuContribution } from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

import { YoutubeExtensionWidgetContribution, YoutubeExtensionMenuContribution } from './youtube-extension-contribution';
import { YoutubeExtensionWidget } from './youtube-extension-widget';


export default new ContainerModule(bind => {
    // add your contribution bindings here
    bindViewContribution(bind, YoutubeExtensionWidgetContribution);
    bind(FrontendApplicationContribution).toService(YoutubeExtensionWidgetContribution); 
    bind(YoutubeExtensionWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: YoutubeExtensionWidget.ID,
        createWidget: () => ctx.container.get<YoutubeExtensionWidget>(YoutubeExtensionWidget)
    })).inSingletonScope();

    bind(MenuContribution).to(YoutubeExtensionMenuContribution);
});
