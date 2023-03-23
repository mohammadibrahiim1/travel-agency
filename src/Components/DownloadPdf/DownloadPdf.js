// import { Download } from "@mui/icons-material";
import {
  Document,
  Page,
  // Text,
  View,
  StyleSheet,
  // PDFDownloadLink,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
// import Loading from "../Loading/Loading";
import "./DownloadPdf.css";

// create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const ref = ReactPDF.render();
const DownloadPdf = () => {
  const pdfData = useLoaderData();
  console.log(pdfData);
  const {
    bookingDate,
    journey,
    userName,
    packageName,
    userEmail,
    totalPrice,
    transactionId,
  } = pdfData;
  // const downloadPdf = () => {
  //   const download = ReactPDF.renderToStream(<Document />);
  //   return download;
  // };

  return (
    <div className="pdf-card-section">
      <div className="card  mt-5">
        <Document>
          <Page size="A4" style={styles.page}>
            {/* <view> */}{" "}
            <div className="row ">
              <div className="col-3">
                <p className="pdf-date">Date : {bookingDate}</p>
              </div>
              <div className="col-4 pdf-middle-column-text ">
                <div>
                  <p>Name : {userName}</p>
                  <p> Email : {userEmail}</p>
                </div>
                <div>
                  <p>Package : {packageName}</p>
                  <p>Price : ${totalPrice}</p>
                </div>
              </div>
              <div className="col-4 pdf-right-column-text">
                <p> Transaction_Id : {transactionId}</p>
                <p> Destination : {journey}</p>
              </div>
            </div>
            {/* </view> */}
            {/* <View> */}{" "}
            <div className="terms_conditions ">
              <h4 className="title mt-5 mb-2">Terms & Conditions</h4>
              <div>
                <div>
                  <h5 className="fw-semibold mt-5 fs-6">Payments</h5>

                  <ul className="conditions-text">
                    <li>
                      If you are purchasing your ticket using a debit or credit
                      card via the Website, we will process these payments via
                      the automated secure common payment gateway which will be
                      subject to fraud screening purposes.
                    </li>
                    <li>
                      If you do not supply the correct card billing address
                      and/or cardholder information, your booking will not be
                      confirmed and the overall cost may increase. We reserve
                      the right to cancel your booking if payment is declined
                      for any reason or if you have supplied incorrect card
                      information. If we become aware of, or is notified of, any
                      fraud or illegal activity associated with the payment for
                      the booking, the booking will be cancelled and you will be
                      liable for all costs and expenses arising from such
                      cancellation, without prejudice to any action that may be
                      taken against us.
                    </li>
                    <li>
                      Golobe may require the card holder to provide additional
                      payment verification upon request by either submitting an
                      online form or visiting the nearest Golobe office, or at
                      the airport at the time of check-in. Golobe reserves the
                      right to deny boarding or to collect a guarantee payment
                      (in cash or from another credit card) if the card
                      originally used for the purchase cannot be presented by
                      the cardholder at check-in or when collecting the tickets,
                      or in the case the original payment has been withheld or
                      disputed by the card issuing bank. Credit card details are
                      held in a secured environment and transferred through an
                      internationally accepted system.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h5 className="fw-semibold fs-6 mt-4">Contact Us</h5>
                <p className="contact-info">
                  If you have any questions about our Website or our Terms of
                  Use, <br /> please contact: Golobe Group Q.C.S.C Golobe Tower
                  P.O. <br />
                  Box: 22550 Doha, <br /> State of Qatar Further contact details
                  can be found at golobe.com/help
                </p>
              </div>
            </div>
            {/* </View> */}
          </Page>
        </Document>
        {/* <button><Document/></button> */}
      </div>

      <Link to={ref(<Document />)}>Download Pdf</Link>
    </div>
  );
};

export default DownloadPdf;
