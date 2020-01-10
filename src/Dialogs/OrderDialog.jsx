import React from 'react';
import {ConfirmButton, Dialog, DialogContent, DialogFooter, DialogShadow} from './dialog.style';

const OrderDialog = ({openOrderDialog, setOpenOrderDialog, setOrders}) => {
  return openOrderDialog ? <>
        <DialogShadow />
        <Dialog>
          <DialogContent>
            <h2>Your order is on the way!</h2>
            <p>You have been emailed confirmation of your order.</p>
          </DialogContent>
          <DialogFooter>
            <ConfirmButton onClick={() => {
              setOpenOrderDialog(false);
              setOrders([]);
            }}>Ok</ConfirmButton>
          </DialogFooter>
        </Dialog>
      </> : <div />
};

export default OrderDialog;
