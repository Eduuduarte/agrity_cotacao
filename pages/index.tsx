import type { NextPage } from 'next';
import { useEffect, useReducer, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { hasCookie, getCookie, setCookie } from 'cookies-next'
import styles from '../styles/Home.module.css';

import Header from '../components/Header';
import { SelectItem, InputItem } from '../components/Form';
import { propriedade, table, somaCotacao, cultura, moeda, formaDePagamento, insumo, catInsumo, produto } from '../data/dataInputs';
import TableItem from '../components/TableItem';
import TableInvest from '../components/TableInvest';
import Button from '../components/Button';

import { Product, Id } from '../types/DataTypes';

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import { useProductContext } from '../context/product/hook';

const Home: NextPage = () => {
  const formRef = useRef(null);
  const { product, setProduct } = useProductContext();
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
  let id = 0;

  let productSave: Product[] = [];

  const handleStore = () => {
    if (hasCookie('id')) {
      const idCookie = getCookie('id');
      const idJson = JSON.parse(idCookie as string);
      const idNumber = parseInt(idJson);
      id = idNumber;

      for (let i = 1; i <= id; i++) {
        let product = localStorage.getItem(i.toString());
        const productJson: Product = JSON.parse(product as string);
        productSave.push(productJson);
      }
    }
  }

  handleStore()




  const handleSubmit: SubmitHandler<Product> = async (data) => {

    handleStore()

    // Incluindo informações no array
    const productIndex = productSave.findIndex(item => item.produto === data.produto && item.catInsumo === data.catInsumo && item.propriedade === data.propriedade && item.insumo === data.insumo);
    if (productIndex > -1) {
      const soma = parseInt(productSave[productIndex].quantidade.toString()) + parseInt(data.quantidade.toString());
      productSave[productIndex].quantidade = soma;
      const productId = productSave[productIndex].id;
      const productChange = JSON.stringify(productSave[productIndex]);
      localStorage.setItem(productId.toString(), productChange);
    } else {
      id = id + 1
      data.id = id;
      const productChange = JSON.stringify(data);
      localStorage.setItem(id.toString(), productChange);
      //productSave.push(data);
      setCookie("id", id);
    }

    handleStore()
    forceUpdate()
  }

  useEffect(() => {
    setProduct(productSave);
  }, [reducerValue]);

  return (
    <div className={styles.main}>
      <Head>
        <title>Agrity - Cotação de insumos</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Cotação de insumos</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h3 className={styles.subTitle}>Informações iniciais</h3>
          {/* Area sobre de informações */}
          <div className={styles.area}>
            <SelectItem
              value={propriedade}
              name="propriedade"
              labelName='Propriedade'
            />
            <SelectItem
              value={cultura}
              name="cultura"
              labelName='Cultura'
            />
            <SelectItem
              value={moeda}
              name="moeda"
              labelName='Moeda'
            />
            <SelectItem
              value={formaDePagamento}
              name="formaPagamento"
              labelName='Forma de pagamento'
            />
            <InputItem
              name='area'
              type='text'
              labelName='Área (ha)'
              required={true}
            />
            <InputItem
              name='precoGrao'
              type='number'
              labelName='Preço do grão'
            />
            <InputItem
              name='retirada'
              type='date'
              labelName='Retirada'
            />
            <InputItem
              name='pagamento'
              type='date'
              labelName='Pagamento'
            />
          </div>
          <h3 className={styles.subTitle}>Produtos</h3>
          {/* Area sobre os produtos */}
          <div className={styles.area}>
            <SelectItem
              value={insumo}
              name="insumo"
              labelName='Insumo'
            />
            <SelectItem
              value={catInsumo}
              name="catInsumo"
              labelName='Categoria do insumo'
            />
            <SelectItem
              value={produto}
              name="produto"
              labelName='Produto'
            />
            <InputItem
              name='ativo'
              type='text'
              labelName='Ativo'
              info={true}
              value="300 kg de super simples / 300kg de cloreto potassio"
            />
            <InputItem
              name='dose'
              type='number'
              labelName='Dose (kg/ha)'
            />
            <InputItem
              name='custo'
              type='text'
              labelName='Custo (kg/ha)'
              info={true}
              value="R$ 2.250,00"
            />
            <InputItem
              name='quantidade'
              type='number'
              labelName='Quantidade'
            />
            <Button
              color='#8CC63F'
              title='Adicionar'
              type='submit'
            />
          </div>
        </Form>
        <div className={styles.solicite}>
          <p className={styles.textSolicite}>Não encontrou o produto que procura?</p>
          <Link href={''}>
            <a className={styles.link}>solicite aqui</a>
          </Link>
        </div>


        <div className={styles.tableArea}>
          <TableItem
            title='Fertilizantes'
            valueTitle={table}
            data={product.filter((item) => item.insumo === 'Fertilizantes')}
          />
        </div>
        <div className={styles.tableArea}>
          <TableItem
            title='Químico'
            valueTitle={table}
            data={product.filter((item) => item.insumo === 'Químico')}
          />
        </div>
        <div className={styles.tableArea}>
          <TableItem
            title='Semente'
            valueTitle={table}
            data={product.filter((item) => item.insumo === 'Semente')}
          />
        </div>
        <div className={styles.investimento}>
          <h3>Investimento</h3>
          <TableInvest
            valueTitle={somaCotacao}
          />
          <div className={styles.buttons}>
            <Button
              color='#4D4D4D'
              title='Voltar'
            />
            <Button
              color='#A21DDD'
              title='Salvar'
            />
            <Button
              color='#FBB03B'
              title='Financiar'
            />
            <Button
              color='#8CC63F'
              title='Comprar'
            />
          </div>
        </div>
      </div>
      {/* Fim do Container */}
    </div>
  )
}

export default Home
