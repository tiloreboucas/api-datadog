# Datadog

- Adding your API key to the Datadog Agent configuration: /etc/datadog-agent/datadog.yaml

- Setting SITE in the Datadog Agent configuration: /etc/datadog-agent/datadog.yaml

/usr/bin/systemctl

- Starting the Datadog Agent...

  Your Datadog Agent is running and functioning properly.
  It will continue to run in the background and submit metrics to Datadog.
  If you ever want to stop the Datadog Agent, run:

      sudo systemctl stop datadog-agent

  And to run it again run:

      sudo systemctl start datadog-agent

  Consider adding dd-agent to the docker group to enable the docker support, run:

      sudo usermod -a -G docker dd-agent
