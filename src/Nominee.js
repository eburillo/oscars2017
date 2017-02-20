import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';


class Nominee extends Component {

  render() {
    return (
      <div>
        <p className={css(styles.nomineeText)}>{this.props.film[this.props.primary]}</p>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  nomineeText: {
      fontSize: "14px",
      marginBottom: "3px"
  }
});

export default Nominee;
