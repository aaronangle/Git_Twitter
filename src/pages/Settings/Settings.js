import React, { useState } from 'react';

import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';
import { CheckboxSlider } from 'components/CheckboxSlider';

import storage from 'utils/storage';

export const Settings = () => {
  const [darkMode, setDarkMode] = useState(storage.getDarkMode() ? true : false);

  function handleCheck() {
    setDarkMode((c) => {
      if (!c) {
        document.documentElement.setAttribute('color-mode', 'dark');
      } else {
        document.documentElement.setAttribute('color-mode', 'light');
      }
      storage.setDarkMode(!c);
      return !c;
    });
  }

  return (
    <>
      <PageContainer>
        <PageHeader>
          <h2>Settings</h2>
        </PageHeader>
        <div className="fc-row">
          <b className="mr-1">Dark Mode</b>
          <CheckboxSlider onChange={handleCheck} checked={darkMode} />
        </div>
      </PageContainer>
    </>
  );
};
