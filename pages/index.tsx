import type { NextPage } from 'next';
import {useRef} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { SelectItem } from '../components/Form';
import { propriedade, table, somaCotacao } from '../data/dataInputs';
import TableItem from '../components/TableItem';
import TableInvest from '../components/TableInvest';
import Button from '../components/Button';
import { formData } from '../interfaces/dataInterfaces'

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';

const Home: NextPage = () => {
  const formRef = useRef(null);

  const handleSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
  }

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
              labelName='Propriedade'
              value={propriedade}
              name="propriedade"
            />
          </div>
          <h3 className={styles.subTitle}>Produtos</h3>
          {/* Area sobre os produtos */}
          <div className={styles.area}>

          </div>
          <button type='submit'>Enviar</button>
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
          />
        </div>
        <div className={styles.tableArea}>
          <TableItem
            title='Químico'
            valueTitle={table}
          />
        </div>
        <div className={styles.tableArea}>
          <TableItem
            title='Semente'
            valueTitle={table}
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
