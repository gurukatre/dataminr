import FeatureFlag from './../featureFlag/FeatureFlag';
import { general, setting, alerts } from './config';
import './Panel.css';

const Panel = () => {
    return <div className="panel">
        <FeatureFlag config={general} />
        <div className="grouped-settings">
            <FeatureFlag config={setting} type="grouped" />
            <FeatureFlag config={alerts} type="grouped" />
        </div>
    </div>
}

export default Panel;