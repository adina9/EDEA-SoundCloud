import React, { useEffect } from 'react';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { setDisplay } from '../store/actions/prefsAction';
import { useDispatch, useSelector } from 'react-redux';


export const BtnsControl = ({ goNext }) => {

    const displayIcons = [<FormatListBulletedRoundedIcon />, <DashboardRoundedIcon />]
    const dispatch = useDispatch()
    const { isTile } = useSelector(state => state.prefsModule)

    const onSetDisplay = async (val) => dispatch(setDisplay(val))

    return (
        <div className='btns-control flex j-between pos a'>
            <ArrowForwardIcon onClick={goNext} />
            <div className="disaply-btns flex j-between">{displayIcons.map((icon, idx) =>
                <div style={{ color: isTile === !!idx ? '#10106e' : '' }} key={idx} onClick={() => onSetDisplay(!!idx)}>{icon}</div>
            )}</div>
        </div >
    );
};
