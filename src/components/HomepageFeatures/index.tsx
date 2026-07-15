import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Database-Centric',
    description: (
      <>
        Toda la lógica de negocio vive en SQL Server: Stored Procedures,
        Views y Functions. El backend es un simple mediador y despachador de
        peticiones.
      </>
    ),
  },
  {
    title: 'Repositorio + DIP',
    description: (
      <>
        El backend expone interfaces de persistencia; las implementaciones
        concretas solo invocan Stored Procedures o Views, cumpliendo el
        principio de Inversión de Dependencias.
      </>
    ),
  },
  {
    title: 'Seguro por diseño',
    description: (
      <>
        Rate limiting, límites de almacenamiento y de conexiones concurrentes,
        prevención de inyección SQL y expiración automática (TTL) de cada
        base de datos aprovisionada.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
