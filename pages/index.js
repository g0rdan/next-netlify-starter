import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <body>
      <form action="https://yoursite.com/credit-card-purchase" method="post">
        <label for="nameoncard">Name on Card</label> 
        <input autocomplete="cc-name" id="nameoncard" name="nameoncard" type="text" /> 
        <label for="ccnumber">Credit Card Number</label> 
        <input autocomplete="cc-number" id="ccnumber" name="ccnumber" type="text" />
        <label for="cc-exp-month">Expiration Month</label> 
        <input autocomplete="cc-exp-month" id="cc-exp-month" name="cc-exp-month" type="text" /> 
        <label for="cc-exp-year">Expiration Year</label> 
        <input autocomplete="cc-exp-year" id="cc-exp-year" name="cc-exp-year" type="text" /> 
        <label for="cvv2">CVV</label> <input autocomplete="cc-csc" id="cvv2" name="cvv2" type="text" />
        <input name="submit" type="submit" value="Submit" />
      </form>
  </body>
  )
}
