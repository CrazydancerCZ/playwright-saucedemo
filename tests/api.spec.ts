import { test, expect } from '@playwright/test';

test('get user', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);
    const user = await response.json();
    expect(user.name).toBe('Leanne Graham');
    expect(user.email).toContain('@');
});

test('get non existent user returns 404', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/999');
    expect(response.status()).toBe(404);
    expect(response.ok()).toBeFalsy();
});

test('create a post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'My test post',
            body: 'Hello from playwright',
            userId: 1,
        },
    });
    expect(response.status()).toBe(201);
    const post = await response.json();
    expect(post.title).toBe('My test post');
    expect(post.id).toBeDefined();



})