---
title: JQ
description: JSON processor
sidebar:
  order: 2
  badge:
    text: New
    variant: success
tags: jq, json
---

jq is a lightweight and flexible command-line `json processor`.

## Things I love about jq.

- can pipe output from various sources in terminal.

  ```sh
  // common use cases with curl and cat
  curl 'https://api.github.com/repos/jqlang/jq/commits?per_page=5' | jq .

  cat myjson.json | jq .
  ```

- cool tooling. [zsh plugin, repl with fzf](https://github.com/reegnz/jq-zsh-plugin)

- can use it inside vim

## Sources

- [Online Man Page](https://jqlang.github.io/jq/manual/#types-and-values)
- [Exploring jq](https://medium.com/@buczynski.rafal/exploring-jq-a-guide-to-essential-techniques-and-tools-for-professionals-b9df9db490de)

## Usage Cheatsheet

### Common command line options

1. `-c/--compact-output`
2. `-r/--raw-output`
3. `-S/--sort-keys`

### Common Filters

#### Identity

`.` - takes input and produces same values as output

<details>
<summary>Example</summary>
<br/>

```sh
echo '{"foo": 42, "bar": "less interesting data"}' | jq '.'
```

```json
//output
{
  "foo": 42,
  "bar": "less interesting data"
}
```

</details>

#### Object Identifier Index

`.key1`, `.key1.key11` or `.key1 | .key11`

<details>
<summary>Example</summary>
<br/>
Example 1

```sh
echo '{"foo": 42, "bar": "less interesting data"}' | jq '.foo'
```

```json
//output
42
```

Example 2

```sh
// Optional Identifier
echo '{"foo": 42, "bar": "less interesting data"}' | jq '.id?'
```

```json
//output
null
```

Example 3

```sh
echo '{"foo": {"id": 42, "bar": "less interesting data"}}' | jq '.foo.bar'
```

```json
//output
"less interesting data"
```

</details>

#### Object Index

`.[<string>]` = `.["foo"]`, `.foo` is better shorthand

#### Array Index

`.[index]`

```bash
echo '[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]' | jq '.[0]'
```

```json
//output
{
  "name": "JSON",
  "good": true
}
```

#### Pipe

`|` : combines two filters

<details>
<summary>Example</summary>
<br/>

```sh
echo '[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]' | jq '.[] | .name'
```

```json
//Input
[
  {
    "name": "JSON",
    "good": true
  },
  {
    "name": "XML",
    "good": false
  }
]

//Output
"JSON"
"XML"
```

</details>

#### More Here

[Basic Filters | Man Page](https://jqlang.github.io/jq/manual/#basic-filters)

### Common Builtin Operators and functions

#### Common mathematical operations (add, substract, multiply, divide, absolute value, sqrt)

#### Length

<details>
<summary>Example</summary>
<br/>

```sh
echo '{"foo": [1, 2, 3], "bar": "hello"}' | jq '.foo | length'
```

```
// Output
3
```

</details>

#### Keys

<details>
<summary>Example</summary>
<br/>

```sh
echo '{"foo": 42, "bar": "value"}' | jq 'keys'
```

```json
// Output
["bar", "foo"]
```

</details>

#### has(keys)

#### map(f)

<details>
<summary>Example</summary>
<br/>

```sh
echo '[1, 2, 3]' | jq 'map(. * 10)'
```

```json
//Output
[10, 20, 30]
```

</details>

#### select(boolean_expression)

<details>
<summary>Example</summary>
<br/>

```sh
echo '[{"name": "Alice", "age": 30}, {"name": "Bob", "age": 20}]' | jq '.[] | select(.age > 25)'
```

```json
// Input
[
  { "name": "Alice", "age": 30 },
  { "name": "Bob", "age": 20 }
]
```

```json
// Output
{
  "name": "Alice",
  "age": 30
}
```

</details>

#### More Here

[Builtin Operators and Function](https://jqlang.github.io/jq/manual/#builtin-operators-and-functions)

### Common Data Types

#### Object Construction {}

<details>
<summary>Example</summary>
<br/>

```
Command	jq '{user, title: .titles[]}'
Input	{"user":"stedolan","titles":["JQ Primer", "More JQ"]}
Output	{"user":"stedolan", "title": "JQ Primer"}
{"user":"stedolan", "title": "More JQ"}


Command	jq '{(.user): .titles}'
Input	{"user":"stedolan","titles":["JQ Primer", "More JQ"]}
Output	{"stedolan": ["JQ Primer", "More JQ"]}
```

</details>

#### Array Construction []

<details>
<summary>Example</summary>
<br/>

```sh
echo '{"user":"stedolan", "projects": ["jq", "wikiflow"]}' | jq '[.user, .projects[]]'
```

```json
// Input
{
  "user": "stedolan",
  "projects": ["jq", "wikiflow"]
}
```

```json
//Output
["stedolan", "jq", "wikiflow"]
```

</details>
