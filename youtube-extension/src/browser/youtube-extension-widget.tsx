import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';

import YoutubeVideo from './components/YoutubeVideo';


@injectable()
export class YoutubeExtensionWidget extends ReactWidget {

    static readonly ID = 'widget-extension:widget';
    static readonly LABEL = 'Youtube Video';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = YoutubeExtensionWidget.ID;
        this.title.label = YoutubeExtensionWidget.LABEL;
        this.title.caption = YoutubeExtensionWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-youtube-play';
        this.update();
    }

    protected render(): React.ReactNode {
        return <YoutubeVideo />
    }
}
