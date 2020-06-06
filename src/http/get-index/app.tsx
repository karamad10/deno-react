import React, { Component } from "https://unpkg.com/es-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
      div: any;
      nav: any;
      li: any;
      ul: any;
      a: any;
    }
  }
}

type Props = {};

type State = {
  time: Date;
};

//@ts-ignore
export class App extends Component<Props, State> {
  componentDidMount() {
    console.log("MOUNTED");
  }

  // routes = {
  //   '/': HomePage,
  //   '/profile': Profile,
  // };

  render() {
    //@ts-ignore
    return <div>x</div>;
  }
}
