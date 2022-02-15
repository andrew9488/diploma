import React from 'react';
import styles from './offer.module.css';
import {OfferResponseType} from "../../../api/offers-api";

type OfferPropsType = {
    offer: OfferResponseType
    deleteOffer: () => void
}

const Offer = ({offer, deleteOffer}: OfferPropsType) => {

    const {is_active, current_quantity, entry_quantity, order_type, price, user, item} = offer

    const isActive = is_active ? styles.activeOffer : styles.notActiveOffer

    return (
        <tr>
            <td>
                <div className={isActive}/>
            </td>
            <td>{user}</td>
            <td>{order_type}</td>
            <td>{entry_quantity}</td>
            <td>{current_quantity}</td>
            <td>${price}</td>
            <td>{item}</td>
            <td>
                <button onClick={deleteOffer}>x</button>
            </td>
        </tr>
    );
};

export default React.memo(Offer);