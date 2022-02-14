import React from 'react';
import {useForm} from "react-hook-form";
import stylesContainer from "../../../shared/styles/container.module.css";
import stylesFormFieldsBlock from "../../../shared/styles/form-fields-block.module.css";
import {Button, Input} from "../../../shared/ui";
import stylesButtonsBlock from "../../../shared/styles/buttons-container.module.css";
import {OffersStore} from "../../../store/offers-store";
import {OrderType} from "../../../api/offers-api";

type OfferDataType = {
    orderType: OrderType;
    item: number;
    price: string;
    entryQuantity: number;
}

const OfferForm = () => {
    const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm<OfferDataType>();
    const {createOffer} = OffersStore;

    const loginSubmitHandler = (dataForm: OfferDataType): void => {
        const {orderType, item, entryQuantity, price} = dataForm
        const user = new Date().getTime()
        const data = {
            order_type: orderType,
            user,
            item: item,
            entry_quantity: entryQuantity,
            price: price
        }
        createOffer(data)
    }

    return (
        <form
            className={stylesContainer.container}
            onSubmit={handleSubmit(loginSubmitHandler)}
        >
            <h2>Create Offer</h2>
            <div className={stylesFormFieldsBlock.inputBlock}>
                <Input
                    {...register("orderType", {required: "This field is required."})}
                    placeholder="order type"
                    type="number"
                />
                {errors?.orderType?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.orderType?.message}</span>}
                <Input
                    {...register("item", {
                        required: "This field is required.",
                    })}
                    placeholder="item"
                    type="number"
                />
                {errors?.item?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.item?.message}</span>}
                <Input
                    {...register("price", {
                        required: "This field is required.",
                    })}
                    placeholder="price"
                />
                {errors?.price?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.price?.message}</span>}
                <Input
                    {...register("entryQuantity", {
                        required: "This field is required.",
                    })}
                    placeholder="entry quantity"
                    type="number"
                />
                {errors?.entryQuantity?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.entryQuantity?.message}</span>}
            </div>
            <div className={stylesButtonsBlock.buttonBlock}>
                <Button type="submit" disabled={isSubmitting}>
                    Create
                </Button>
            </div>
        </form>
    );
};

export default OfferForm;