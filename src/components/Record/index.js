import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';

import Action from "components/Action";
import Avatar from 'components/Avatar';
import Detail from "components/Detail";
import Name from 'components/Name';
import PopUp from "components/PopUp";

import calendar from '../../assets/calendar.svg';

import styles from './index.module.scss';

export const Record = ({ championship = {}, loading }) => {
  const [showSchedule, setShowSchedule] = useState(false);
  const toggleShowSchedule = () => setShowSchedule(!showSchedule);
  useEffect(() => {
    if (loading === true && showSchedule === true) {
      setShowSchedule(false);
    }
  }, [loading, showSchedule]);

  const renderSchedule = () => (
    championship.schedule && (
      <ul className={styles.schedule}>
        {championship.schedule.map(
          date => (<li key={date}>{dayjs(date).format('DD MMM hh:mm')}</li>)
        )}
      </ul>
    )
  );

  const href = !loading ? `http://test.faceit.com/${championship.id}` : '';
  return (
    <div className={styles.container}>
      <a href={href} className={styles.main}>
        <Avatar className={styles.avatar}
                url={championship.avatarUrl}
                name={championship.name}
                loading={loading} />
        <div className={styles.content}>
          <Name name={championship.name}
                loading={loading} />
          <div className={styles.details}>
            <Detail className={styles.detail}
                    label="Skill level"
                    values={[
                      championship.skillLevelMin,
                      championship.skillLevelMax,
                    ]}
                    delimiter=" • "
                    loading={loading} />
            <Detail className={styles.detail}
                    label="Slots"
                    values={[
                      championship.slotsTaken,
                      championship.slotsTotal,
                    ]}
                    loading={loading} />
            <Action label={(
                      <img className={styles.calendarIcon}
                           src={calendar}
                           alt="Schedule" />
                    )}
                    onClick={toggleShowSchedule}
                    disabled={loading} />
          </div>
        </div>
      </a>
      <PopUp renderChildren={renderSchedule}
             visible={showSchedule} />
    </div>
  );
};

Record.propTypes = {
  championship: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    skillLevelMin: PropTypes.number.isRequired,
    skillLevelMax: PropTypes.number.isRequired,
    slotsTotal: PropTypes.number.isRequired,
    slotsTaken: PropTypes.number.isRequired,
    schedule: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  }),
  loading: PropTypes.bool,
};

export default Record;
