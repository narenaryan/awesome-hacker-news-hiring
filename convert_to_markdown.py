json_data = {} # Use the JSON data from the javascript script

# Accessing the URLs from the 'data' key
urls = json_data['data']

# Grouping URLs by hostname
grouped_urls = {}
for url in urls:
    try:
        hostname = url.split('/')[2]  # Extracting the hostname from each URL
        grouped_urls.setdefault(hostname, []).append(url)
    except IndexError:
        # Handling any URL that does not fit the standard format
        continue

# Preparing a markdown table
markdown_table = "| Hostname | Links |\n"
markdown_table += "|----------|-------|\n"
for hostname, links in grouped_urls.items():
    links_str = "<br>".join(links)  # Concatenating all links for each hostname with a line break
    markdown_table += f"| {hostname} | {links_str} |\n"

print(markdown_table)
