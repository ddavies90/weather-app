import React from 'react';
import { render } from '@testing-library/react';
import LocationDetails from '../../components/LocationDetails';

describe('LocationDetails', () => {
  it('renders correct city and country props', () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText('Manchester, UK')).toHaveClass('location-details');
  });
});
