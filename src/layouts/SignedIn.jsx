import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image avatar speced="right" src="https://www.aytacagma.com/images/CVfototwit.PNG" />
        <Dropdown pointing="top left" text="AGMA">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item text="Bilgilerim" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
