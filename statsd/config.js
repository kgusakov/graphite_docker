{
  graphitePort: 2003,
  graphiteHost: "127.0.0.1",
  port: 8125,
  mgmt_port: 8126,
  backends: ['./backends/graphite'],
  deleteGauges: true,
  percentThreshold: [90,95,99],
  address_ipv6: false
}
