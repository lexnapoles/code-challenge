import { call, put } from 'redux-saga/effects';
import { fetchArticles } from './articles';
import * as Api from '../api/api';
import { FETCH_ARTICLES } from '../constants/actionTypes';

it('calls the fetch articles service', () => {
  const iterator = fetchArticles();

  const callFetchArticlesService = iterator.next().value;

  expect(callFetchArticlesService).toEqual(call(Api.fetchArticles));
});

it('dispatches a FETCH_ARTICLES_SUCCESS action with the articles when the articles are received', () => {
  const iterator = fetchArticles();

  iterator.next();

  const payload = {};
  const dispatchSuccessAction = iterator.next(payload).value;

  expect(dispatchSuccessAction).toEqual(put({ type: FETCH_ARTICLES.SUCCESS, payload }));
});