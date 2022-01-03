import React from 'react';

//icons:
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';


export const BtnsControl = ({ backOrNext, onSetDisplay, isTile, isOnMainPage }) => {

    const arrowIcons = [<ArrowBackRoundedIcon />, <ArrowForwardRoundedIcon />]
    const displayIcons = [<FormatListBulletedRoundedIcon />, <DashboardRoundedIcon />]


    return (
        <div className='btns-control flex j-between pos a'>
            <div className="arrow-btns flex j-between">
                {arrowIcons.map((arrow, idx) => <div key={idx} onClick={() => backOrNext(!!idx)}>{arrow}</div>)}
            </div>

            {isOnMainPage && <div className="disaply-btns flex j-between">{displayIcons.map((icon, idx) =>
                <div style={{ color: isTile === !!idx ? 'black' : '' }} key={idx} onClick={() => onSetDisplay(!!idx)}>{icon}</div>
            )}</div>}
        </div >
    );
};
