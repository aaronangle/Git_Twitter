import React, { useState } from 'react';

import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';
import { CheckboxSlider } from 'components/CheckboxSlider';

import storage from 'utils/storage';

export const Settings = () => {
  const [darkMode, setDarkMode] = useState(storage.getDarkMode() ? true : false);
  function checkyBoi() {
    setDarkMode((c) => !c);
    storage.setDarkMode(darkMode);
  }
  return (
    <>
      <PageContainer>
        <PageHeader>
          <h2>Settings</h2>
        </PageHeader>
        <div className="fc-row">
          <b className="mr-1">Dark Mode</b>
          <CheckboxSlider onChange={checkyBoi} checked={darkMode} />
        </div>
      </PageContainer>
    </>
  );
};
