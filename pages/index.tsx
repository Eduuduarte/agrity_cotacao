import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import SelectItem from '../components/SelectItem';
import styles from '../styles/Home.module.css';

import { propriedade, table, somaCotacao } from '../data/dataInputs';
import TableItem from '../components/TableItem';
import TableInvest from '../components/TableInvest';
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Agrity - Cotação de insumos</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Cotação de insumos</h2>
        <form action="">
          <h3 className={styles.subTitle}>Informações iniciais</h3>
          <div className={styles.area}>
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Cultura'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Moeda'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Forma de pagamento'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
          </div>
          <h3 className={styles.subTitle}>Produtos</h3>
          <div className={styles.area}>
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
            <SelectItem
              labelName='Propriedade'
              required={true}
              value={propriedade}
            />
          </div>
          <div className={styles.solicite}>
            <p className={styles.textSolicite}>Não encontrou o produto que procura?</p>
            <Link href={''}>
              <a className={styles.link}>solicite aqui</a>
            </Link>
          </div>
        </form>

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
