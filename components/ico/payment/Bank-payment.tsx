import { BANK_DEPOSIT } from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { TokenBuyIcoBankAction } from "state/actions/launchpad";
import PaymentDetails from "./paymentDetails";

const BankPayment = ({ pageInfo, initialData }: any) => {
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(false);
  const [doc, setDoc] = useState(null);
  const [data, setData] = useState<any>({
    amount: null,
    bank_id: null,
    pay_currency: null,
    referance: "",
  });
  const inputRef = useRef(null);
  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    event;
    setDoc(event.target.files[0]);
  };
  const handleClick = () => {
    // 👇️ open file input box on click of other element
    //@ts-ignore
    inputRef.current.click();
  };
  return (
    <div>
      <form
        className="w-100 ico-tokenCreate row"
        onSubmit={(e: any) => {
          e.preventDefault();
          TokenBuyIcoBankAction(
            initialData,
            setLoading,
            doc,
            data.bank_id,
            data.amount,
            BANK_DEPOSIT,
            pageInfo.ref,
            data.pay_currency
          );
        }}>
        <div className="col-md-6 form-input-div">
          <label className="ico-label-box" htmlFor="">
            {t("Amount")}
          </label>
          <input
            type="number"
            name="amount"
            value={data.amount}
            placeholder="amount"
            required
            className={`ico-input-box`}
            onChange={(e: any) => {
              setData({
                ...data,
                amount: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-md-6 form-input-div">
          <label className="ico-label-box" htmlFor="">
            {t("Select Bank")}
          </label>
          <select
            name="bank"
            className={`ico-input-box`}
            required
            onChange={(e) => {
              setData({
                ...data,
                bank_id: e.target.value,
              });
            }}>
            <option value="">{t("Select Bank")}</option>
            {pageInfo?.bank?.map((item: any, index: any) => (
              <option value={item.id} key={index}>
                {item?.bank_name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 form-input-div">
          <label className="ico-label-box" htmlFor="">
            {t("Select Currency")}
          </label>
          <select
            name="bank"
            className={`ico-input-box`}
            required
            onChange={(e) => {
              setData({
                ...data,
                pay_currency: e.target.value,
              });
            }}>
            <option value="">{t("Select")}</option>
            {pageInfo?.currency_list?.map((item: any, index: any) => (
              <option value={item.code} key={index}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 form-input-div">
          <label className="ico-label-box" htmlFor="">
            {t("Bank Referance")}
          </label>
          <input
            type="text"
            name="amount"
            value={pageInfo.ref}
            placeholder="Bank Referance"
            onClick={() => {
              toast.success("Bank Referance Copied");
            }}
            className={`ico-input-box`}
          />
          <small>
            {t("Copy this referance for further validation and bank payment")}
          </small>
        </div>
        <div className="col-md-12 form-input-div">
          <div className="file-upload-wrapper">
            {/* @ts-ignore */}
            <label htmlFor="upload-photo" onClick={handleClick}>
              {/* @ts-ignore */}
              {doc ? doc.name : t("Browse")}
            </label>
            <input
              style={{ display: "none" }}
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </div>
        {data.pay_currency && data.amount && initialData.phase_id && (
          <PaymentDetails
            currency={data.pay_currency}
            amount={data.amount}
            phase_id={initialData.phase_id}
            token_id={initialData.phase_id}
            payment_method={BANK_DEPOSIT}
          />
        )}
        <button className="primary-btn-outline w-100" type="submit">
          {loading ? "Please Wait" : t("Make Payment")}
        </button>
      </form>
    </div>
  );
};

export default BankPayment;
