import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';

import Result from './Result';
import ReduxProvider from '../../../../reduxProvider';
import { IArticle } from '../../interfaces/IArticle';

const article: IArticle = {
  author: 'Keenan Higgins',
  content: 'While December 21 may just be a normal winter solstice for a few of you out there, the date has literally been on the minds of "Black Twitter" for weeks due to a lighthearted rumor that Black people … [+1274 chars]',
  description: 'Freddie Gibbs, NLE Choppa, Tierra Whack and others got in on the social media fun surrounding "superpowers" that Black people are supposed to receive today due to the planets aligning.https://www.hotnewhiphop.com/rappers-react-to-the-12-21-winter-solstice-sup…',
  publishedAt: '2020-12-21T20:14:50Z',
  source: { id: '', name: 'HotNewHipHop' },
  title: 'Rappers React To The 12/21 Winter Solstice "Superpowers" Theory',
  url: 'https://www.hotnewhiphop.com/rappers-react-to-the-12-21-winter-solstice-superpowers-theory-news.123281.html',
  urlToImage: 'https://www.hotnewhiphop.com/image/740x416/cover/1608578837_0c4b28d541806a35a06534d5b7678f0f.jpg/763768b1c57dbd0195a958b6e8a7ec37/1608578837_c4c2d28127ea33a3607b29ed7bd65451.jpg'
};

describe('Mounted Result component', () => {
  let wrapped: ReactWrapper;

  beforeEach(() => {
    wrapped = mount(
      <ReduxProvider>
        <Result article={article} />
      </ReduxProvider>,
    );
  });

  it('should contain the title Rappers React...', () => {
    expect(wrapped.render().text()).toContain(article.title);
  });

  it('should contain the author Keenan Higgins', () => {
    expect(wrapped.render().text()).toContain(article.author);
  });
});

describe('Shallowed Result component', () => {
  let wrapped: ShallowWrapper;

  beforeEach(() => {
    wrapped = shallow(<Result article={article} />);
  });

  it('should contain a muted class name', () => {
    expect(wrapped.find('.text-muted').exists()).toBe(true);
  });

  it('should contain a no gutters class name', () => {
    expect(wrapped.find('.no-gutters').exists()).toBe(true);
  });
});
