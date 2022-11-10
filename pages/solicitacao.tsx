import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Solicitacao.module.css';

import Header from '../components/Header';
import { SelectItem, InputItem } from '../components/Form';
import { insumo, catInsumo } from '../data/dataInputs';
import { Produtcs } from '../data/data';
import Button from '../components/Button';

import { Product, Id } from '../types/DataTypes';

import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import { Navbar } from '../components/Navbar';
import { SelectItems } from '../components/Form/SelectItems';

const Solicitacao = () => {

  // Config navbar
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  // Valores dos item do form
  const [insumoSelect, setInsumoSelect] = useState('Fertilizantes');
  const [productSelect, setProductSelect] = useState('Nitrogenado');
  const [ativoSelect, setAtivoSelect] = useState('N39');

  useEffect(() => {
    const ativo = Produtcs.filter(item => item.produto === productSelect);
    setAtivoSelect(ativo[0].ativo);
  }, [productSelect]);

  useEffect(() => {
    const insumo = Produtcs.filter(item => item.insumo === insumoSelect);
    setProductSelect(insumo[0].produto);
  }, [insumoSelect]);

  // Array para o localStorage
  const formRef = useRef(null);

  const handleSubmit: SubmitHandler<Product> = async (data, { reset }) => {

  }

  return (
    <div className={styles.main}>
      <Head>
        <title>Agrity - Solicitação</title>
      </Head>

      {showNavbar &&
        <Navbar click={handleShowNavbar} />
      }

      <Header click={handleShowNavbar} />

      <div className={styles.container}>

        <h2 className={styles.title}>Solicitar Produto</h2>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.areaForm}>


          {/* Area sobre os produtos */}
          <h3 className={styles.subTitle}>Produtos</h3>
          <div className={styles.area}>
            <SelectItem
              value={insumo}
              name="insumo"
              labelName='Insumo'
              change={newValue => setInsumoSelect(newValue)}
            />
            <SelectItem
              value={catInsumo}
              name="catInsumo"
              labelName='Categoria do insumo'
            />
            <SelectItems
              value={Produtcs.filter(item => item.insumo === insumoSelect)}
              name="produto"
              labelName='Produto'
              change={newValue => setProductSelect(newValue)}
            />
            <InputItem
              name='ativo'
              type='text'
              labelName='Ativo'
              info={true}
              value={ativoSelect}
              change={() => null}
            />
          </div>

          <Button
              color='#8CC63F'
              title='Adicionar'
              type='submit'
            />

        </Form>
      </div>
      {/* Fim do Container */}
    </div>
  )
}

export default Solicitacao;
