import { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ totalPage, onChange }) {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    onChange(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          page={page}
          color="warning"
          size="large"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}

BasicPagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
