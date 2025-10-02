import React from 'react';
// استيراد الكلاسات من ملف الـ CSS Module
import styles from './Impressum.module.css'; 

const Impressum = () => {
  return (
    // استخدام الكلاسات المستوردة من ملف الـ CSS Module
    <div className={styles.impressumPageContainer}>
      <header className={styles.impressumHeader}>
        <h1>Impressum</h1>
        <p>Effective date: January 1, 2024</p>
      </header>
      
      <div className={styles.impressumGrid}>
        {/* قسم الاتصال */}
        <div className={styles.impressumCard}>
          <h3>Contact</h3>
          <p><strong>Telefon:</strong> 01575 9129500</p>
          <p><strong>E-Mail:</strong> <a href="mailto:umzugtransportservice6@gmail.com">umzugtransportservice6@gmail.com</a></p>
        </div>

        {/* قسم المسؤول عن المحتوى */}
        <div className={styles.impressumCard}>
          <h3>Verantwortlich für den Inhalt</h3>
          <p>Abdulkarim Haj</p>
          <p>Am Haferfeld 15, 86156 Augsburg</p>
        </div>

        {/* قسم السجل التجاري */}
        <div className={styles.impressumCard}>
          <h3>Handelsregister</h3>
          <p><strong>Mitgliedsnr.</strong> 05751840</p>
          <p><strong>Registergericht:</strong> IHK Industrie und Handelskammer Schwaben - Augsburg</p>
        </div>
        
        {/* قسم الضرائب */}
        <div className={styles.impressumCard}>
          <h3>Umsatzsteuer-ID</h3>
          <p><strong>Umsatzsteuer-Identifikationsnummer:</strong> 31 198 246 073</p>
        </div>
        
        {/* قسم المهنة */}
        <div className={styles.impressumCard}>
          <h3>Berufsbezeichnung</h3>
          <p><strong>Berufsbezeichnung:</strong> Transport, Umzug, Lastentaxi</p>
        </div>

        {/* قسم حل النزاعات */}
        <div className={`${styles.impressumCard} ${styles.fullWidth}`}>
          <h3>EU-Streitschlichtung</h3>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.</p>
        </div>
        
        {/* قسم شروط الاستخدام */}
        <div className={`${styles.impressumCard} ${styles.fullWidth}`}>
          <h3>Verbraucher­streit­beilegung</h3>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Impressum;