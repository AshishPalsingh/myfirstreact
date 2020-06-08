import React, { Component } from "react";
export default class Welcome extends Component {
  convertDataURIToBinary(dataURI) {
    var raw = window.atob(dataURI);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div>
          Array Data:{" "}
          {this.convertDataURIToBinary(
            "OfCTXZ4AAOA68JNdngAA4Dvwk12gAADgPPCTXaQAAOA98JNdnQAA4D7wk12mAADgP/CTXaAAAOBA8JNdpgAA4EHwk12iAADgQvCTXZwAAOBD8JNdowAA4ETwk12bAADgRfCTXaQAAOBG8JNdogAA4Efwk12jAADgSPCTXZ0AAOBJ8JNdqQAA4Erwk12iAADgS/CTXaMAAOBM8JNdpAAA4E3wk12fAADgTvCTXaMAAOBP8JNdqgAA4FDwk12gAADgUfCTXaQAAOBS8JNdoAAA4FPwk12eAADgVPCTXZ8AAOBV8JNdpQAA4Fbwk12hAADg"
          )}
        </div>
      </div>
    );
  }
}
