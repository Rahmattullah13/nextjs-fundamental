import React from 'react';
import SectionProfile from './sectionProfile';

export default function Settings() {
  return (
    <div>
      <p>This Is A Settings</p>
      <SectionProfile /> // hanya akan muncul jika dipanggil seperti ini.
    </div>
  );
}
