# This repository is no longer maintained!

This action is no longer necessary; you can now get everything it provided directly from the [GitHub Context](https://docs.github.com/en/actions/learn-github-actions/contexts#github-context) within Actions (`github.ref_type` and `github.ref_name`).

# Get Ref Detail Action

Gets the current ref type and name.

## Outputs

### `ref_type`
    
The ref type: `branch` or `tag`.

### `ref_name`

The ref name (*without* the `refs/xxxx/` prefix).

## Example usage

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v1

  - name: Get Ref Detail
    uses: markashleybell/actions-get-ref-detail@v1
    id: ref_detail

  - name: Echo Ref Detail
    run: |
        echo ${{ steps.ref_detail.outputs.ref_type }}
        echo $GITHUB_REF_TYPE
        echo ${{ steps.ref_detail.outputs.ref_name }}
        echo $GITHUB_REF_NAME
```
