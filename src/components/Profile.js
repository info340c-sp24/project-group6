import React, { useState, useEffect } from 'react';
import { MobileNav } from './Nav';

export function Profile() {
  const [settings, setSettings] = useState([
    { id: 'setting1', isChecked: false },
    { id: 'setting2', isChecked: false },
    { id: 'setting3', isChecked: false },
    { id: 'setting4', isChecked: false },
    { id: 'setting5', isChecked: false },
    { id: 'setting6', isChecked: false },
  ]);

  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('userSettings'));
    if (savedSettings) {
      setSettings(savedSettings);
    }
  }, []);

  const handleCheck = (settingId) => {
    setSettings(prevSettings =>
      prevSettings.map(setting => (setting.id === settingId ? { ...setting, isChecked: !setting.isChecked } : setting))
    );
  };

  const handleSave = () => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
    setSaved(true);
  };

  return (
    <>
      <header>
        <MobileNav />
        <h1>PROFILE</h1>
      </header>
      <div id='notifications'>
        <div className='notification-group'>
          <h2>GENERAL ALERTS</h2>
          <input
            type='checkbox'
            id='setting1'
            checked={settings.find(setting => setting.id === 'setting1').isChecked}
            onChange={() => handleCheck('setting1')}
          />
          <label htmlFor='setting1'>Subscribe to UW campus emergency alert system.</label><br />

          <input
            type='checkbox'
            id='setting2'
            checked={settings.find(setting => setting.id === 'setting2').isChecked}
            onChange={() => handleCheck('setting2')}
          />
          <label htmlFor='setting2'>Subscribe to off-campus emergencies or safety alerts.</label><br />
        </div>

        <div className='notification-group'>
          <h2>PERSONAL SAFETY</h2>
          <input
            type='checkbox'
            id='setting3'
            checked={settings.find(setting => setting.id === 'setting3').isChecked}
            onChange={() => handleCheck('setting3')}
          />
          <label htmlFor='setting3'>Notify me when I enter a designated high-risk area on campus (e.g., secluded pathway at night).</label><br />

          <input
            type='checkbox'
            id='setting4'
            checked={settings.find(setting => setting.id === 'setting4').isChecked}
            onChange={() => handleCheck('setting4')}
          />
          <label htmlFor='setting4'>Notify me when there's an ongoing incident on campus, with safety instructions relevant to my location.</label><br />

          <input
            type='checkbox'
            id='setting5'
            checked={settings.find(setting => setting.id === 'setting5').isChecked}
            onChange={() => handleCheck('setting5')}
          />
          <label htmlFor='setting5'>Notify me during high-risk hours (e.g., evenings) with safety tips and reminders for specific areas (e.g., poorly lit parking lots).</label><br />

          <input
            type='checkbox'
            id='setting6'
            checked={settings.find(setting => setting.id === 'setting6').isChecked}
            onChange={() => handleCheck('setting6')}
          />
          <label htmlFor='setting6'>Notify me when a safety resource (e.g., Night Walk Escort) becomes available near my location.</label><br />
        </div>
        {isSaved && <p className='savedMessage'>Changes saved</p>}
        <button onClick={handleSave}>SAVE CHANGES</button>
      </div>
    </>
  );
}
