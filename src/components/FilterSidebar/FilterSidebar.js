'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FilterSidebar.module.css';

export default function FilterSidebar({ isOpen, onToggle, itemCount }) {
  const [openFilters, setOpenFilters] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleFilter = (filterName) => {
    setOpenFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const handleOptionChange = (filterName, option) => {
    setSelectedOptions(prev => {
      const current = prev[filterName] || [];
      const newSelection = current.includes(option)
        ? current.filter(item => item !== option)
        : [...current, option];
      return { ...prev, [filterName]: newSelection };
    });
  };

  const handleUnselectAll = (filterName, e) => {
    e.stopPropagation();
    setSelectedOptions(prev => ({
      ...prev,
      [filterName]: []
    }));
  };

  const filters = [
    { name: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
    { name: 'OCCASION', options: [] },
    { name: 'WORK', options: [] },
    { name: 'FABRIC', options: [] },
    { name: 'SEGMENT', options: [] },
    { name: 'SUITABLE FOR', options: [] },
    { name: 'RAW MATERIALS', options: [] },
    { name: 'PATTERN', options: [] },
  ];

  const getDisplayText = (filterName) => {
    const selected = selectedOptions[filterName];
    if (!selected || selected.length === 0) {
      return 'All';
    }
    return selected.join(', ');
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.filters}>
        <label className={styles.checkboxFilter}>
          <input type="checkbox" />
          <span>CUSTOMIZABLE</span>
        </label>
        
        {filters.map((filter) => (
          <div key={filter.name} className={styles.filterGroup}>
            <button
              className={styles.filterHeader}
              onClick={() => toggleFilter(filter.name)}
            >
              <div className={styles.filterHeaderLeft}>
                <h2 className={styles.filterTitle}>{filter.name}</h2>
                <span className={styles.filterSelected}>{getDisplayText(filter.name)}</span>
                {openFilters[filter.name] && (
                  <button
                    className={styles.unselectAll}
                    onClick={(e) => handleUnselectAll(filter.name, e)}
                  >
                    Unselect all
                  </button>
                )}
              </div>
              <ChevronDown 
                size={16} 
                className={openFilters[filter.name] ? styles.rotated : ''}
              />
            </button>
            {openFilters[filter.name] && (
              <div className={styles.filterOptions}>
                {filter.options.map((option) => {
                  const isChecked = selectedOptions[filter.name]?.includes(option) || false;
                  return (
                    <label key={option} className={styles.filterOption}>
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => handleOptionChange(filter.name, option)}
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

