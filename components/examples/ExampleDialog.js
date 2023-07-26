import { useState } from "react";
import { Dialog } from "@reach/dialog";
//import VisuallyHidden from '@reach/visually-hidden';
import { VisuallyHidden } from "@reach/visually-hidden";

function ExampleDialog() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <button onClick={open}>Open Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>안녕 나야나~!❤🧡</p>
      </Dialog>
    </div>
  );
}

export default ExampleDialog;
