import React from 'react';
import Renderer from 'react-test-renderer/shallow';

test('Matches shallow shapshot', () => {
  delete process.env.FRONT_END;
  const Submission =
    require('components/SubmissionManagement/Submission').default;
  const renderer = new Renderer();
  renderer.render(<Submission />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
