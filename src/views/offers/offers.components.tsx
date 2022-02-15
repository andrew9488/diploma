import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import styles from "./offers.module.css";
import {OffersStore} from "../../store/offers-store";
import {Offer} from "./offer";
import {Button, Modal} from "../../shared/ui";
import {OfferForm} from "./offerForm";

const Offers: React.FC = observer(({}) => {

    const [visible, setVisible] = useState(false)
    const {fetchOffersList, offersList, deleteOffer} = OffersStore;

    useEffect(() => {
        fetchOffersList()
    }, [])

    const openCreateOfferModalHandler = () => {
        setVisible(true)
    }
    return (
        <div className={styles.offersContainer}>
            <div className={styles.pageTitle}>
                <h1>Offers list</h1>
                <div className={styles.button}>
                    <Button onClick={openCreateOfferModalHandler}>Create offer</Button>
                </div>
            </div>
            <table className={styles.offersTable}>
                <thead>
                <tr>
                    <th>Active</th>
                    <th>User ID</th>
                    <th>Order</th>
                    <th>Entry quantity</th>
                    <th>Current quantity</th>
                    <th>Price</th>
                    <th>Item</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {offersList.length > 0 && offersList.map(offer => {
                    const deleteOfferHandler = () => deleteOffer(offer.id)
                    return <Offer key={offer.id} offer={offer} deleteOffer={deleteOfferHandler}/>
                })}
                </tbody>
            </table>
            <Modal visible={visible} setVisible={setVisible}>
                <OfferForm/>
            </Modal>
        </div>
    )
})

export default Offers;