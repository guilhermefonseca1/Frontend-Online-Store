import { Barcode, CreditCard } from 'phosphor-react';
import React, { Component } from 'react';
import '../styles/FinishBuy.css';

export default class FinishBuy extends Component {
  render() {
    return (
      <div className="wrapper">
        <form className="form">

          <input
            type="text"
            data-testid="checkout-fullname"
            id="fullname"
            placeholder="Nome Completo"
          />
          <input
            type="text"
            data-testid="checkout-email"
            id="email"
            placeholder="Email"
          />
          <input
            type="text"
            data-testid="checkout-cpf"
            placeholder="CPF"
            id="CPF"
          />
          <input
            type="text"
            data-testid="checkout-phone"
            id="phone"
            placeholder="Telefone"
          />
          <input
            type="text"
            id="address"
            data-testid="checkout-address"
            placeholder="Endereço"
          />
          <input
            id="CEP"
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
          />
        </form>
        <div className="pagamento">
          <p>Método de Pagamento</p>
          <div>
            <div>
              <p>Boleto</p>
              <input
                type="checkbox"
                name="boleto"
                id="boleto"
              />
              <Barcode size={ 32 } />

            </div>
            <div>
              <p>Cartão de Crédito</p>
              <CreditCard size={ 32 } />
              <input type="checkbox" name="visa" id="visa" />
              <CreditCard size={ 32 } />
              <input type="checkbox" name="master" id="master" />
              <CreditCard size={ 32 } />
              <input type="checkbox" name="elo" id="elo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
