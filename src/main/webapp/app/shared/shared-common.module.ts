import { NgModule } from '@angular/core';

import { BlogpostSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BlogpostSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BlogpostSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BlogpostSharedCommonModule {}
