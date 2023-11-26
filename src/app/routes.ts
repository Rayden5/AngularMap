
import { SvgmapComponent } from './mapinfo/svgmap/svgmap.component';
import { Routes } from '@angular/router';
import { MapinfoComponent } from './mapinfo/mapinfo.component';

const routes: Routes = [
    {
        path: '',
        component: SvgmapComponent,
        title: "Map without Info"
    },
    {
        path: 'mapinfo',
        component: MapinfoComponent,
        title: "Map with Info"
    }
];

export default routes;
