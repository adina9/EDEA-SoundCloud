import React from 'react';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

export const ToggleWrapper = ({ value, onUpdate }) => {
    return (
        <div className="toggle-wrapper pos a">
            <div className="toggle checkcross pa">
                <input type="text" />
                <label className="toggle-item" style={{ backgroundColor: value ? '#969696b5' : '#ffeaab' }} onClick={() => onUpdate(!value)}>
                    <div className={value ? 'check' : 'uncheck'}>{value ? <NightsStayIcon /> : <WbSunnyIcon />}</div>
                </label>
            </div>
        </div>
    );
}
